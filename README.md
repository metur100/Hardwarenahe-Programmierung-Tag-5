# Hardwarenahe-Programmierung-Tag-5
 
# Aufgabe 1 String Konkatenierung

(a) Schreiben Sie eine Funktion my strcat, welche zwei Strings entgegen nimmt, diese konkateniert und in einem Ausgabestring speichert. Wahlen Sie eine der beiden folgenden Funktionssignaturen aus, um Ihre Funktion entsprechend zu implementieren:
entweder void my strcat(char *string1, char *string2, char *result) oder char* my strcat(char *string1, char *string2)
Der Ausgabestring (result bzw. R®uckgabewert) darf hierbei nicht l®anger als notwendig sein. Ob Sie den Speicher fur den Ausgabestring innerhalb oder auﬂerhalb der Funktion my strcat reservieren, ist Ihnen uberlassen. Verwenden Sie keine Funktionen aus string.h auﬂer strlen()!
(b) Schreiben Sie ein Hauptprogramm, welches die Funktion Ihrer Funktion demonstriert.

# Aufgabe 2 Groﬂbuchstaben

Schreiben Sie ein Programm, das folgende Funktionen enthalt. Vereinfachend d®urfen Sie in der gesamten Aufgabe davon ausgehen, dass Eingabestrings nur Buchstaben enthalten.
(a) eine Funktion to_upper(char *string), die alle Kleinbuchstaben des gegebenen Strings in die entsprechenden Groﬂbuchstaben ®andert (aus ìKa?eeî wird zum Beispiel ìKAFFEEî). Uberlegen Sie sich, wie der C-Datentyp char intern gespeichert ist, und wie Sie dies nutzen k®onnen, um diese ®Anderung elegant zu l®osen.
Input: Output:
K a f f e e \0 K A F F E E \0
(b) eine Funktion int compare_ignorecase(char *string1, char *string2), die alle Zeichen in beiden ubergebenen Strings in die entsprechenden Groﬂbuchstaben umwandelt, und die 1 zur®uckgibt, falls beide umgewandelten Strings dann gleich sind, und 0 sonst.
(c) Wir haben Ihnen Unit-Tests und ein Make?le zur Verfugung gestellt. Sie konnen die Tests mit dem Befehl ímake runí bauen und ausf®uhren. Testen Sie Ihre beiden Funktionen aus (a) und (b) mit den bereitgestellten Unit-Tests und stellen Sie sicher, dass alle erf®ullt sind. Sie sollten die Tests nicht ver®andern! Schauen Sie sich auﬂerdem den Aufbau des Make?les an, damit Sie in Zukunft selbst Make?les erstellen konnen, um Ihren Kompilier- und Testprozess zu vereinfachen.

# Aufgabe 3 Tokenizer

In dieser Aufgabe sollen Sie ein Programm schreiben, das Texte in Token (Worter, die durch Leerzeichen oder Sonderzeichen getrennt sind) aufteilen kann, und das die gesammelten Token z®ahlen kann. W®orter bestehen aus Buchstaben und/oder Zi?ern. Als Sonderzeichen gelten hier ì.î ì,î ì!î und ì?î. Sie d®urfen davon ausgehen, dass keine anderen Zeichen auﬂer Buchstaben, Zi?ern und diesen Sonderzeichen in Eingaben vorkommen.
Input: Tokens: H®au?gkeit:
ì...Kein Text? Ein Text!î ìKeinî ìTextî ìEinî 1 2 1
(a) Implementieren Sie alle in der header-Datei count all.h deklarierten Funktionen, und beachten Sie dabei die Kommentare in der Datei. Ihre Implementierung muss alle Unit-Tests in count all tests.ts erf®ullen.
(b) Schreiben Sie ein main-Programm, das den Benutzer au?ordert einen Text (max. 80 Zeichen) einzugeben, das diesen Text in Tokens aufteilt und schlieﬂlich jedes Token mit dessen H®au?gkeit im Eingabetext ausgibt. Sie konnen die bereitgestellte Datei main.c als Grundlage verwenden.
