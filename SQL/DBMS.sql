create table employees (
emp_id integer not null,
emp_name varchar(15),
job_name varchar(10),
manager_id integer,
hire_date date,
salary decimal(10,2),
commisssion decimal(7,2),
dept_id integer
);
create table salary_grade (
grade integer,
min_salary integer,
max_salary integer
);
create table department (
dep_id integer,
dep_name varchar(20),
dep_location varchar(15)
);
insert into employees (emp_id,emp_name,job_name,manager_id,
hire_date,salary,commisssion,dept_id)
values (68319,"KAYLING","PRESIDENT",null,"1991-11-18",
6000.00,null,1001),
(66928,"BLAZE","MANAGER",68319,"1991-05-01",
2750.00,null,3001),
(67832,"CLARE","MANAGER",68319,"1991-06-09",
2550.00,null,1001),
(65646,"JONAS","MANAGER",68319,"1991-04-02",
2957.00,null,2001),
(67858,"SCARLET","ANALYST",65646,"1997-04-19",
3100.00,null,2001),
(69062,"FRANK","ANALYST",65646,"1991-12-03",
3100.00,null,2001),
(63679,"SANDRINE","CLERK",69062,"1990-12-18",
900.00,null,2001),
(64989,"ADELYN","SALESMAN",66928,"1991-02-20",
1700.00,400.00,3001),
(65271,"WADE","SALESMAN",66928,"1991-02-22",
1350.00,600.00,3001),
(66564,"MADDEN","SALESMAN",66928,"1991-09-28",
1350.00,1500.00,3001),
(68454,"TUCKER","SALESMAN",66928,"1991-09-08",
1600.00,0.00,3001),
(68736,"ADNRES","CLERK",67858,"1997-05-03",
1200.00,null,2001),
(69000,"JULIUS","CLERK",66928,"1991-12-03",
1050.00,null,3001),
(69324,"MARKER","CLERK",67832,"1992-01-23",
1400.00,null,1001);
insert into salary_grade(grade,min_salary,max_salary)
values(1,800,1300),
(2,1301,1500),
(3,1501,2100),
(4,2101,3100),
(5,3101,9999);
insert into department(dep_id,dep_name,dep_location)
values(1001,"FINANCE","SYDNEY"),
(2001,"AUDIT","MELBOURNE"),
(3001,"MARKETING","PERTH"),
(4001,"PRODUCTION","BRISBANE");
select * from employees;
select salary from employees;
select distinct job_name from employees;
select emp_name,
concat('$',salary*15/100+salary) as salary
from employees;
select concat(emp_name,"   ",job_name)as "Employee & Job" from employees;
select * from employees where salary>('3000')(salary*25/100+salary)
select emp_id,emp_name,salary,date_format(hire_date,'%M %d %Y')from employees;
select length(trim(emp_name))
from employees;
select emp_id,salary,commisssion from employees;
select distinct dept_id,job_name from employees;
select * from employees where dept_id not in(2001);
select * from employees where hire_date<('1991-1-1');
select avg(salary)as avg from employees where job_name='analyst';
select * from employees where emp_name='blaze';
select * from employees where (1.25*salary)>3000;
select * from employees where date_format(hire_date,"%M")="january";
select emp_id,emp_name,hire_date,salary from employees where hire_date<('1991-04-01');
select emp_name,salary from employees where emp_name='frank' between 800 and 7000;
select * from employees where job_name not in('president','manager')order by salary asc;
select max(salary)as max from employees;
select job_name,
avg(salary)as avg, 
avg(salary+commisssion)as avg 
from employees 
group by job_name;
select * from employees where emp_name like'%ar%';
alter table employees
add gender integer;
update employees set gender='male' where emp_id=68454;
update employees set gender='male' where emp_id=68454;
