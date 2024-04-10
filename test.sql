SELECT
  date,
  department_name,
  contract_revenue_actual_value,
  contract_revenue_budget_value,
  contract_revenue_predicted_value,
  contract_revenue_month_to_date_actual_value,
  contract_revenue_month_to_date_budget_value,
  contract_revenue_full_year_budget_value,
  profit_actual_value,
  profit_budget_value,
  profit_predicted_value,
  profit_month_to_date_actual_value,
  profit_month_to_date_budget_value,
  profit_full_year_budget_value,
  profit_actual_value_percentage,
  profit_budget_value_percentage,
  profit_predicted_value_percentage,
  profit_month_to_date_actual_value_percentage,
  profit_month_to_date_budget_value_percentage,
  profit_full_year_budget_value_percentage
FROM
  CHAT_DATASET_DATA_EXCEL_202402051349141855022
WHERE
  department_name = 'HWG'
  AND date LIKE '2022%';
