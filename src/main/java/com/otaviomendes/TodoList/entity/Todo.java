package com.otaviomendes.TodoList.entity;

import jakarta.persistence.*;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
@Entity
@Table(name = "todos")
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank
    private String nome;
    @NotBlank
    private String descricao;
    private boolean realizado;
    @Enumerated(EnumType.STRING) // Adiciona esta anotação para mapear o enum como String no banco de dados
    private Prioridade prioridade;


    @Enumerated(EnumType.STRING)
    private TipoTodo tipoTodo;
    private String lembrete;

    public Todo() {

    }

    public Todo(Long id, @NotBlank String nome, @NotBlank String descricao, boolean realizado, Prioridade prioridade, String lembrete, TipoTodo tipoTodo) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.realizado = realizado;
        this.prioridade = prioridade;
        this.lembrete = lembrete;
        this.tipoTodo= tipoTodo;
    }

    public Todo(String nome, String descricao, boolean realizado, Prioridade prioridade, String lembrete,TipoTodo tipoTodo) {
        this.nome = nome;
        this.descricao = descricao;
        this.realizado = realizado;
        this.prioridade = prioridade;
        this.tipoTodo = tipoTodo;
        this.lembrete = lembrete;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }



    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public boolean isRealizado() {
        return realizado;
    }

    public void setRealizado(boolean realizado) {
        this.realizado = realizado;
    }

    public Prioridade getPrioridade() {
        return prioridade;
    }

    public void setPrioridade(Prioridade prioridade) {
        this.prioridade = prioridade;
    }

    public TipoTodo getTipoTodo(){
        return tipoTodo;
    }

    public void setTipoTodo(TipoTodo tipoTodo){
        this.tipoTodo = tipoTodo;
    }
    public String getLembrete() {
        return lembrete;
    }

    public void setLembrete(String lembrete) {
        this.lembrete = lembrete;
    }



}