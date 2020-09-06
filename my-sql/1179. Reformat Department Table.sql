# Write your MySQL query statement below
Select t.id,
MIN(CASE WHEN t.month='Jan' THEN t.revenue Else Null End) As 'Jan_Revenue',
MIN(CASE WHEN t.month='Feb' THEN t.revenue Else Null End) As 'Feb_Revenue',
MIN(CASE WHEN t.month='Mar' THEN t.revenue Else Null End) As 'Mar_Revenue',
MIN(CASE WHEN t.month='Apr' THEN t.revenue Else Null End) As 'Apr_Revenue',
MIN(CASE WHEN t.month='May' THEN t.revenue Else Null End) As 'May_Revenue',
MIN(CASE WHEN t.month='Jun' THEN t.revenue Else Null End) As 'Jun_Revenue',
MIN(CASE WHEN t.month='Jul' THEN t.revenue Else Null End) As 'Jul_Revenue',
MIN(CASE WHEN t.month='Aug' THEN t.revenue Else Null End) As 'Aug_Revenue',
MIN(CASE WHEN t.month='Sep' THEN t.revenue Else Null End) As 'Sep_Revenue',
MIN(CASE WHEN t.month='Oct' THEN t.revenue Else Null End) As 'Oct_Revenue',
MIN(CASE WHEN t.month='Nov' THEN t.revenue Else Null End) As 'Nov_Revenue',
MIN(CASE WHEN t.month='Dec' THEN t.revenue Else Null End) As 'Dec_Revenue'
From Department t
Group by t.id