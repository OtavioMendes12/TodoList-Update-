package com.otaviomendes.TodoList.service;
import com.otaviomendes.TodoList.entity.Prioridade;
import org.springframework.data.domain.Sort;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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
    public Todo updateTaskPriority(Long taskId, Prioridade priority) {
        Optional<Todo> optionalTask = todoRepository.findById(taskId);
        if (optionalTask.isPresent()) {
            Todo task = optionalTask.get();
            task.setPrioridade(priority);
            return todoRepository.save(task);
        } else {
            throw new IllegalArgumentException("Tarefa não encontrada com o ID: " + taskId);
        }
    }

}