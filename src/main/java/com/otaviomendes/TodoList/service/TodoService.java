package com.otaviomendes.TodoList.service;
<<<<<<< HEAD

import java.util.List;
=======
import org.springframework.data.domain.Sort;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

>>>>>>> 432f47c (Fix)
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
<<<<<<< HEAD
        Sort sort = Sort.by("prioridade").descending().and(Sort.by("nome").ascending());
       return todoRepository.findAll(sort);
=======

        List<Todo> todos = todoRepository.findAll();


        Comparator<Todo> priorityComparator = Comparator.comparing((Todo todo) -> {

            switch (todo.getPrioridade()) {
                case Alta:
                    return 1;
                case Media:
                    return 2;
                case Baixa:
                    return 3;
                default:
                    return 4;
            }
        });

        // Ordene as tarefas usando o Comparator personalizado
        List<Todo> sortedTodos = todos.stream()
                .sorted(priorityComparator)
                .collect(Collectors.toList());

        return sortedTodos;
>>>>>>> 432f47c (Fix)
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