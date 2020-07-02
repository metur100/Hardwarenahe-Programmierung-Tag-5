#include<stdio.h>
#include<string.h>
#include"toUpper.h"

void to_upper(char *string){
  for(int i=0; i<strlen(string); ++i){
     if(string[i]>= 'a' && string[i] <='z'){
         string[i] -=32;
     }
  }
}
int compare_ignorecase(char *string1, char *string2){
  to_upper(string1);
  to_upper(string2);
  if(strcmp(string1,string2)==0){
     return 0;
  }    
  return 1;
}
