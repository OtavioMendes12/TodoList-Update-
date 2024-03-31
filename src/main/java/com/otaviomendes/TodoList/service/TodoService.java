package com.otaviomendes.TodoList.service;

import java.util.List;
import com.otaviomendes.TodoList.entity.Todo;
import com.otaviomendes.TodoList.repository.TodoRepository;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class TodoService {
    private TodoRepository todoRepository;
    public TodoService(TodoRepository todoRepository){
        this.todoRepository = todoRepository;
    }
    public List<Todo> create(Todo todo){
        todoRepository.save(todo);
        return list();
    }
    public List<Todo> list() {
        Sort sort = Sort.by("prioridade").descending().and(Sort.by("nome").ascending());
       return todoRepository.findAll(sort);
    }
    public List<Todo> update(Long id, Todo todo){

        todo.setId(id);
        todoRepository.save(todo);
        return list();
    }
    public List<Todo> delete(Long id){
        todoRepository.deleteById(id);
        return list();

    }

}