.PHONY: server bundle lint console test setup deploy-add deploy ssh routes tags open

export APP_NAME=tik-tak-toe
export DB_NAME=tik_production
export HOST_ADDRESS=46.101.201.95

server:
	bin/rails s

bundle:
	(bundle check || bundle install) && yarn install

lint:
	bin/rubocop -A --only Style/FrozenStringLiteralComment && \
	  bin/rubocop -a

console:
	bin/rails c

test:
	bin/rspec

setup: bundle
	bin/rails \
	  db:drop \
	  db:create \
	  db:migrate \
	  db:seed

routes:
	bin/rails routes

tags:
	ctags -R .

deploy-add:
	git remote add dokku dokku@$(HOST_ADDRESS):$(APP_NAME)

deploy:
	git push dokku master

open:
	open http://$(HOST_ADDRESS)
