SELECT CONCAT(e.first_name, ' ', e.last_name) as employee,
CONCAT(m.first_name, ' ', m.last_name) as manager
FROM hr.employees as e
INNER JOIN hr.employees as m
ON m.employee_id = e.MANAGER_ID
WHERE e.DEPARTMENT_ID != m.DEPARTMENT_ID;

SELECT CONCAT(m.first_name, ' ', m.last_name) as manager,
COUNT(e.employee_id)
FROM hr.employees as m
INNER JOIN hr.employees as e
ON m.employee_id = e.manager_id
GROUP BY m.first_name, m.last_name;
