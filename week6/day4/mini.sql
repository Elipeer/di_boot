select first_name "first", last_name "last" from employees;

select employee_id from employees

select * from employees
order by first_name desc

select first_name, last_name, salary, (salary * .15) as "percent" from employees

select employee_id, first_name, last_name, salary from employees
order by salary asc

select sum(salary) from employees

select min(salary), max(salary) from employees

select avg(salary) from employees

select count(1) from employees

select UPPER(first_name) from employees 

select SUBSTRING (first_name, 1, 3) from employees 

select first_name, last_name from employees

select first_name || last_name from employees

select count(first_name || last_name) from employees

select length(first_name||last_name) from employees

select * from employees limit 10

