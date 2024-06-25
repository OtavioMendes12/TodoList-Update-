import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { getTodos, updateTodo, deleteTodo } from "../../service/TarefasService";
import DeleteIcon from '@mui/icons-material/DeleteForeverRounded';
import ButtonCreate from "../ButtonCreate/ButtonCreate";
import Button from "@mui/material/Button";
import CheckIcon from '@mui/icons-material/VerifiedUser';
import ClearIcon from '@mui/icons-material/DoNotDisturbOutlined';
import AddTaskIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import DoNotDisturbIcon from '@mui/icons-material/CheckCircleOutlined';
import EditIcon from '@mui/icons-material/EditNoteOutlined';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, MenuItem } from "@mui/material";

export default function DataTable() {
  const [lista, setLista] = useState([]);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [editTodo, setEditTodo] = useState({
    id: null,
    nome: '',
    descricao: '',
    data_prevista: '',
    prioridade: '',
  });

  const columns = [
    { field: "nome", headerName: "Tarefas", width: 200 },
    { field: "descricao", headerName: "Descrição", width: 200 },
    { field: "data_prevista", headerName: "Data de previsao", width: 200 },
    { field: "prioridade", headerName: "Prioridade da tarefa", width: 200 },
    {
      field: "realizado",
      headerName: "Realizado",
      width: 200,
      renderCell: (params) =>
        params.value ? <CheckIcon sx={{ color: 'green' }} /> : <ClearIcon sx={{ color: 'red' }} />,
    },
    {
      field: "actions",
      headerName: "Ações",
      description: "Ações para o Todo",
      sortable: false,
      width: 400,
      renderCell: (params) => (
        <>
          <Button
            onClick={() => handleDelete(params.row.id)}
            style={{ marginRight: 16 }}
            color="error"
          >
            <DeleteIcon sx={{ color: 'black' }} />
          </Button>
          <Button onClick={() => handleUpdate(params.row)}>
            {params.row.realizado ? <DoNotDisturbIcon sx={{ color: 'green' }} /> : <AddTaskIcon sx={{ color: '#fffff' }} alt='realizado' />}
          </Button>
          <Button onClick={() => handleEditClick(params.row)}>
            <EditIcon />
          </Button>
        </>
      ),
    },
  ];

  const fetchData = async () => {
    try {
      const response = await getTodos();
      setLista(response);
    } catch (error) {
      console.error("Erro ao buscar os todos:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      fetchData(); 
    } catch (error) {
      console.error("Erro ao deletar o todo:", error);
    }
  };

  const handleUpdate = async (todo) => {
    try {
      const updatedTodo = { ...todo, realizado: !todo.realizado };
      await updateTodo(updatedTodo);
      fetchData(); 
    } catch (error) {
      console.error("Erro ao atualizar o todo:", error);
    }
  };

  const handleEditClick = (todo) => {
    setEditTodo({
      id: todo.id,
      nome: todo.nome,
      descricao: todo.descricao,
      data_prevista: todo.data_prevista,
      prioridade: todo.prioridade,
    });
    setOpenEditDialog(true);
  };

  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setEditTodo({
      ...editTodo,
      [name]: value,
    });
  };

  const handleEditSubmit = async () => {
    try {
      await updateTodo(editTodo);
      fetchData(); 
      setOpenEditDialog(false);
    } catch (error) {
      console.error("Erro ao atualizar o todo:", error);
    }
  };

  const prioritySortComparator = (v1, v2) => {
    const priorities = ["ALTA", "MEDIO", "BAIXO"];
    return priorities.indexOf(v1) - priorities.indexOf(v2);
  };

  return (
    <div
      style={{
        height: "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ height: 400, width: "67%" }}>
        <ButtonCreate />
        <DataGrid
          rows={lista}
          columns={columns}
          getRowId={(row) => row.id}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
            sorting: {
              sortModel: [{ field: 'prioridade', sort: 'asc' }]
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sortComparator={prioritySortComparator}
        />
      </div>

      <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)}>
        <DialogTitle>Editar Tarefa</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            name="nome"
            label="Nome"
            type="text"
            sx={{color: 'white'}}
            fullWidth
            value={editTodo.nome}
            onChange={handleEditChange}
          />
          <TextField
            margin="dense"
            name="descricao"
            label="Descrição"
            type="text"
            fullWidth
            value={editTodo.descricao}
            onChange={handleEditChange}
          />
          <TextField
            margin="dense"
            name="data_prevista"
            label="Data Prevista"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            value={editTodo.data_prevista}
            onChange={handleEditChange}
          />
          <TextField
            margin="dense"
            name="prioridade"
            label="Prioridade"
            type="text"
            fullWidth
            select
            value={editTodo.prioridade}
            onChange={handleEditChange}
          >
            <MenuItem value="ALTA">ALTA</MenuItem>
            <MenuItem value="MEDIA">MEDIA</MenuItem>
            <MenuItem value="BAIXA">BAIXO</MenuItem>
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEditDialog(false)} color="primary">
            ABORTAR
          </Button>
          <Button onClick={handleEditSubmit} color="primary">
            SALVAR
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
