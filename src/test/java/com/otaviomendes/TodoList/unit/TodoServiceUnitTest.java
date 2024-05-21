package com.otaviomendes.TodoList.unit;

import static org.junit.jupiter.api.Assertions.*;

import com.otaviomendes.TodoList.entity.Prioridade;
import com.otaviomendes.TodoList.entity.TipoTodo;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import com.otaviomendes.TodoList.entity.Todo;

public class TodoServiceUnitTest {

    @Test
    void testPriorityOrdering() {

        Todo highPriorityTodo = new Todo();
        highPriorityTodo.setPrioridade(Prioridade.Alta);

        Todo mediumPriorityTodo = new Todo();
        mediumPriorityTodo.setPrioridade(Prioridade.Media);

        Todo lowPriorityTodo = new Todo();
        lowPriorityTodo.setPrioridade(Prioridade.Baixa);


        List<Todo> todos = Arrays.asList(mediumPriorityTodo, lowPriorityTodo, highPriorityTodo);

        todos.sort(Comparator.comparing(todo -> {
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
        }));

        assertEquals(Prioridade.Alta, todos.get(0).getPrioridade());
        assertEquals(Prioridade.Media, todos.get(1).getPrioridade());
        assertEquals(Prioridade.Baixa, todos.get(2).getPrioridade());
    }

    @Test
    void testTipoTodoOrdering(){
        Todo dataTipoTodo = new Todo();
        dataTipoTodo.setTipoTodo(TipoTodo.Data);
        Todo prazoTipoTodo = new Todo();
        prazoTipoTodo.setTipoTodo(TipoTodo.Prazo);
        Todo livreTipoTodo = new Todo();
        livreTipoTodo.setTipoTodo(TipoTodo.Livre);
        List<Todo> todos = Arrays.asList(livreTipoTodo, prazoTipoTodo, dataTipoTodo);
        todos.sort(Comparator.comparing(todo -> {
            switch (todo.getTipoTodo()) {
                case Data:
                    return 1;
                case Prazo:
                    return 2;
                case Livre:
                    return 3;
                default:
                    return 4;
            }

        }));
        assertEquals(TipoTodo.Data, todos.get(0).getTipoTodo());
        assertEquals(TipoTodo.Prazo, todos.get(1).getTipoTodo());
        assertEquals(TipoTodo.Livre, todos.get(2).getTipoTodo());

    }
}