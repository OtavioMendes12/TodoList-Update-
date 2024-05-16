package com.otaviomendes.TodoList;

import com.otaviomendes.TodoList.entity.Prioridade;
import com.otaviomendes.TodoList.entity.TipoTodo;
import com.otaviomendes.TodoList.entity.Todo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.reactive.server.WebTestClient;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class TodoListApplicationTests {

	@Autowired
	private WebTestClient webTestClient;

	@Test
	void testCreateTodoSuccess() {
		var todo = new Todo("todo 1", "desc todo 1", false, Prioridade.Alta, "as 19h", TipoTodo.Data);

		webTestClient
				.post()
				.uri("/todos")
				.bodyValue(todo);
	}

	@Test
	void testCreateTodoFailure() {

	}
}