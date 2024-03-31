package com.otaviomendes.TodoList.repository;


import com.otaviomendes.TodoList.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo, Long> {

}