package com.otaviomendes.TodoList;

<<<<<<< HEAD
=======
import com.otaviomendes.TodoList.entity.Prioridade;
>>>>>>> 432f47c (Fix)
import com.otaviomendes.TodoList.entity.Todo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.reactive.server.WebTestClient;

@SpringBootTest
class TodoListApplicationTests {
	@Autowired
	private WebTestClient webTestClient;
	@Test
	void testCreateTodoSuccess() {
<<<<<<< HEAD
		var todo = new Todo("todo 1", "desc todo 1", false, 1, "as 19h");
=======
		var todo = new Todo("todo 1", "desc todo 1", false, Prioridade.Alta, "as 19h");
>>>>>>> 432f47c (Fix)
		webTestClient
				.post()
				.uri("/todos")
				.bodyValue(todo)
				.exchange()
				.expectStatus().isOk()
				.expectBody()
				.jsonPath("$").isArray()
				.jsonPath("$.lenght()").isEqualTo(1)
				.jsonPath("$[0].nome").isEqualTo(todo.getNome())
				.jsonPath("$[0].descricao").isEqualTo(todo.getDescricao())
				.jsonPath("$[0].realizado").isEqualTo(todo.isRealizado())
				.jsonPath("$[0].prioridade").isEqualTo(todo.getPrioridade());
	}

	@Test
	void testCreateTodoFailure() {
	}

}
