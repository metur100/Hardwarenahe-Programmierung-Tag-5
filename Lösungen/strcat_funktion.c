#include<stdio.h>
#include<string.h>

void my_strcat(char *string1, char *string2, char *result);

int main()
{
	char string1[] = "Regen";
	char string2[] = "Bogen";
    
	char result[strlen(string1)+strlen(string2)];
	my_strcat(string1,string2,result);

	printf("%s\n",result);
	return 0;
}
void my_strcat(char *string1, char *string2, char *result)
{
	int i, k = 0;
    	for (i = 0; i < strlen(string1)+strlen(string2); i++)
    	{
		if (i < strlen(string1)) 
		{
			result[i] = string1[i];
		}
		else {
			result[i] = string2[k];
			k++;
		}
     	}
	result[strlen(string1)+strlen(string2)] = '\0';
}
