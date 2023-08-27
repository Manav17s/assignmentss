//1. WRITE  A  PROGRAM  TO  PRINT  SUM  OF  ALL  SALERIES  IN  AN  ARRAY :

console.log(salareis.reduce((a,e)=>a+e,0));


//2. WRITE A  PROGRAM  TO  PRINT  MAXIMUM  SALARY  IN  AN  ARRAY : 

console.log(salareis.reduce((a,e)=>(e>a)?e:a,0));


//3. WRITE  A  PROGRAM  TO  PRINT  SUM  OF  ALL  SALARIES  > 10000  IN  AN  ARRAY.

console.log(salareis.reduce((a,e)=>(e>10000)?a+e:a,0));


//4.WRITE  A  PROOGRAM  TO  COUNT  NO.  OF  SALARY  GREATER  THAN 10000.

console.log(salareis.reduce((a,e)=>(e>10000)?a+1:a,0));


//5. WRITE  A  PROGRAM  TO  SORT  ARRAY  OF  OBJECTS  ACCORDING  TO  NAME  AND  SALARY.

var arr=[{name:'Santosh',sal:1200000},{name:'Mahesh',sal:132000},{name:'Ganesh',sal:1500000}];

//sorting according to salary :
arr.sort((a,b)=>(a.sal-b.sal));

//sorting according to name :
 arr.sort((a,b)=>(a.name.localeCompare(b.name)));

//6. WRITE  A  PROGRAM  TO  MAKE  AN  ARRAY  FROM  ALREADY  EXISTING  ARRAY  WITH  INCREMET  OF  10%  .

var arr1=arr.filter(e=>e.sal=(e.sal*1.1));