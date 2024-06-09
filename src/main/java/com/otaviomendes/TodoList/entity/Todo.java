package com.otaviomendes.TodoList.entity;

import jakarta.persistence.*;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
@Table(name = "todos")
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    @NotBlank
    private String descricao;
    private boolean realizado;
    @Enumerated(EnumType.STRING) // Adiciona esta anotação para mapear o enum como String no banco de dados
    private Prioridade prioridade;

    @FutureOrPresent(message = "A data prevista de execução deve ser igual ou superior à data atual.")
    private LocalDate dueDate;
    @Enumerated(EnumType.STRING)
    private TipoTodo tipoTodo;
    private String lembrete;

    public Todo() {

    }

    public Todo(Long id, String nome, @NotBlank String descricao, boolean realizado, Prioridade prioridade, String lembrete, TipoTodo tipoTodo, LocalDate dueDate) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.realizado = realizado;
        this.prioridade = prioridade;
        this.lembrete = lembrete;
        this.tipoTodo= tipoTodo;
        this.dueDate = dueDate;
    }

    public Todo(String nome, String descricao, boolean realizado, Prioridade prioridade, String lembrete,TipoTodo tipoTodo) {
        this.nome = nome;
        this.descricao = descricao;
        this.realizado = realizado;
        this.prioridade = prioridade;
        this.tipoTodo = tipoTodo;
        this.lembrete = lembrete;
    }
}