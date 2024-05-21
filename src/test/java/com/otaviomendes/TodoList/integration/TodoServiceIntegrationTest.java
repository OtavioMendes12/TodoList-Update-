package com.otaviomendes.TodoList.integration;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

import com.otaviomendes.TodoList.entity.Prioridade;
import com.otaviomendes.TodoList.service.TodoService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;

import com.otaviomendes.TodoList.entity.Todo;
import com.otaviomendes.TodoList.repository.TodoRepository;

public class TodoServiceIntegrationTest {

	private TodoService todoService;

	@Mock
	private TodoRepository todoRepository;

	@BeforeEach
	void setUp() {
		MockitoAnnotations.initMocks(this);
		todoService = new TodoService(todoRepository);
	}

	@Test
	void testCreate() {
		Todo todo = new Todo();
		todo.setPrioridade(Prioridade.Alta);
		when(todoRepository.save(any(Todo.class))).thenReturn(todo);
		when(todoRepository.findAll()).thenReturn(Arrays.asList(todo));

		List<Todo> result = todoService.create(todo);
		assertNotNull(result);
		assertEquals(1, result.size());
		assertEquals(Prioridade.Alta, result.get(0).getPrioridade());

		verify(todoRepository).save(todo);
		verify(todoRepository).findAll();
	}

	@Test
	void testList() {
		Todo todo1 = new Todo();
		todo1.setPrioridade(Prioridade.Alta);
		Todo todo2 = new Todo();
		todo2.setPrioridade(Prioridade.Media);
		when(todoRepository.findAll()).thenReturn(Arrays.asList(todo2, todo1));

		List<Todo> result = todoService.list();
		assertNotNull(result);
		assertEquals(2, result.size());
		assertEquals(Prioridade.Alta, result.get(0).getPrioridade());  // Verifica se a ordenação está correta

		verify(todoRepository).findAll();
	}

	@Test
	void testUpdate() {
		Todo existingTodo = new Todo();
		existingTodo.setId(1L);
		existingTodo.setPrioridade(Prioridade.Media);
		Todo updatedTodo = new Todo();
		updatedTodo.setId(1L);
		updatedTodo.setPrioridade(Prioridade.Alta);

		when(todoRepository.save(any(Todo.class))).thenReturn(updatedTodo);
		when(todoRepository.findAll()).thenReturn(Arrays.asList(updatedTodo));

		List<Todo> result = todoService.update(1L, updatedTodo);
		assertNotNull(result);
		assertEquals(1, result.size());
		assertEquals(Prioridade.Alta, result.get(0).getPrioridade());

		verify(todoRepository).save(updatedTodo);
		verify(todoRepository).findAll();
	}

	@Test
	void testDelete() {
		Todo todo1 = new Todo();
		todo1.setId(1L);
		todo1.setPrioridade(Prioridade.Alta);
		Todo todo2 = new Todo();
		todo2.setId(2L);
		todo2.setPrioridade(Prioridade.Alta);

		when(todoRepository.findAll()).thenReturn(Arrays.asList(todo1), Arrays.asList());

		List<Todo> initialResult = todoService.list();
		assertEquals(1, initialResult.size());

		List<Todo> resultAfterDeletion = todoService.delete(1L);
		assertTrue(resultAfterDeletion.isEmpty());

		verify(todoRepository).deleteById(1L);
		verify(todoRepository, times(2)).findAll();
	}

}