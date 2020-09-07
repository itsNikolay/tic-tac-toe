.PHONY: server bundle lint console test setup deploy-add deploy ssh routes tags open

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
