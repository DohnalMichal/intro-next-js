'use client'
import { newTodo } from '@/utils/actions'
import { Button, Input, Form, InputWrapper } from './styles'

const NewTodoForm = () => {
  return (
    <Form action={newTodo}>
      <InputWrapper>
        <Input name="content" type="text" placeholder="Enter a todo..." />
      </InputWrapper>
      <Button type="submit">New todo</Button>
    </Form>
  )
}

export default NewTodoForm
