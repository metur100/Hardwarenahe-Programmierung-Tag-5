#include "toUpper.h"
#include <string.h>

// checkmk toUpper_tests.ts > toUpper_tests.c
// gcc toUpper.c toUpper_tests.c -o tests -Wall -lsubunit -lm -lpthread -lrt -lcheck -std=c99 -g -fprofile-arcs -ftest-coverage

#test to_upper_j_to_J
    char to_test[] = "j";
    to_upper(to_test);

    char res[] = "J";
    ck_assert_str_eq(to_test, res);


#test to_upper_Z_stays_Z
    char to_test[] = "Z";
    to_upper(to_test);

    char res[] = "Z";
    ck_assert_str_eq(to_test, res);


#test to_upper_longer_string_only_lower_case
    char to_test[] ="diesisteinlangerstring";
    to_upper(to_test);
    
    char res[] = "DIESISTEINLANGERSTRING";
    ck_assert_str_eq(to_test, res);


#test to_upper_longer_string_mixed_case
    char to_test[] ="DIeSISTeinLANGERstring";
    to_upper(to_test);
    
    char res[] = "DIESISTEINLANGERSTRING";
    ck_assert_str_eq(to_test, res);

#test to_upper_really_long_string
    char to_test[] ="abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
    to_upper(to_test);
    
    char res[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
    ck_assert_str_eq(to_test, res);


#test compare_ignore_case_true_short
    char string1[] = "Y";
    char string2[] = "y";
    ck_assert_int_eq(compare_ignorecase(string1, string2), 0);


#test compare_ignore_case_false_short
    char string1[] = "z";
    char string2[] = "y";
    ck_assert_int_eq(compare_ignorecase(string1, string2), 1);


#test compare_ignore_case_true_long
    char string1[] = "HALLOwelt";
    char string2[] = "halloWELT";
    ck_assert_int_eq(compare_ignorecase(string1, string2), 0);


#test compare_ignore_case_false_long
    char string1[] = "HALLOwelt";
    char string2[] = "WELThallo";
    ck_assert_int_eq(compare_ignorecase(string1, string2), 1);
