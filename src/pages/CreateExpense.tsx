import CreateExpenseForm from '../features/expenses/CreateExpenseForm';
import FormLayout from '../layouts/FormLayout';

function CreateExpense() {
  return (
    <FormLayout title="Create Expense">
      <CreateExpenseForm />
    </FormLayout>
  );
}

export default CreateExpense;
