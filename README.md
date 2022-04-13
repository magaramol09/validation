Validation Assignment
 
<-------Library Used ------->
 
"formik": "^2.2.9"
"yup": "^0.32.11",
"yup-phone": "^1.3.2"

for Creating form and adding validations
 "Yup-Phone" for phone number validation check to yup validator using google-libphonenumber .

<------- Validation Checks ------->

First Name
 * Cannot be Empty 
 * Required Minimum Lenght is 3    
 * Required Maximum Lenght is 12   

Last Name
 * Cannot be Empty
 * Required Minimum Lenght is 3    
 * Required Maximum Lenght is 12   

 

Contact No
 * Default Add +91
 * Cannot be Empty  
 * google-libphonenumber "IN" Checks
 * Cannot be Empty
 * Cannot be String , Symbol , Or Decimals Point 

Password
 * Cannot be Empty   
 * Required Minimum Lenght is 8    
 * Required Maximum Lenght is 10    

Confirm Password
 * Cannot be Empty   
 * Must Match With Password 
 

