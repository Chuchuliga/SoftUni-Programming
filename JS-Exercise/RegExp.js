// \w – matches any word character (a-z, A-Z, 0-9, _)
// \W – matches any non-word character (the opposite of \w)
// \s – matches any white-space character
// \S – matches any non-white-space character (opposite of \s)
// \d – matches any decimal digit (0-9)
// \D – matches any non-decimal character (the opposite of \d)

// [nvj]+ matches any character that is either n, v or j
// {n}ode.{j}s {v}0.12.2 
// {} - emphasized
// [^abc] – matches any character that is not a, b or c
// {A}b{r}a{h}a{m} 
// {} - emphasized
// [0-9] – character range: matches any digit from 0 to 9
// John is {8} years old. 
// {} - emphasized

// * – matches the previous element zero or more times
// \+\d*    =>  {+359885976002} a{+}b
// {} - emphasized
// + – matches the previous element one or more times
// \+\d+    =>  {+359885976002} a+b
// {} - emphasized
// ? – matches the previous element zero or one time
// \+\d?    =>  {+3}59885976002 a{+}b
// {} - emphasized
// {3} – matches the previous element exactly 3 times
// \+\d{3}  =>  {+359}885976002 a+b
// {} - emphasized

// (subexpression) – captures the matched subexpression as numbered group
// \d{2}-(\w{3})-\d{4}  =>  {22}-{Jan}-{2015}
// {} - emphasized
// (?:subexpression) – defines a non-capturing group
// ^(?:Hi|hello),\s*(\w+)$  =>  {Hi}, {Peter}
// {} - emphasized
// (?<name>subexpression) – defines a named capturing group
// (?<day>\d{2})-(?<month>\w{3})-(?<year>\d{4})  =>  {22}-{Jan}-{2015}
// {} - emphasized