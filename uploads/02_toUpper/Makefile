
tests:
	checkmk toUpper_tests.ts > toUpper_tests.c

gcc: tests
	gcc toUpper.c toUpper_tests.c -o tests -Wall -lsubunit -lm -lpthread -lrt -lcheck -Wall -std=c99 -g

run: gcc
	./tests

clean:
	rm -f toUpper_tests.c tests
