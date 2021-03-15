import React from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const ClientTable = (listClientes) => (
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Age</th>
                <th>Email</th>
                <th>Opções</th>
            </tr>
        </thead>
        <tbody>
            { listClientes.clients.map((client) => (
                <tr key={ client.id }>
                    <td>{client.id}</td>
                    <td>{client.name}</td>
                    <td>{client.age}</td>
                    <td>{client.email}</td>
                    <td>
                        <Button variant="secondary">Editar</Button> {' '}
                        <Button variant="danger">Excluir</Button>
                    </td>
                </tr>
            ))}
        </tbody>
    </Table>
);

export default ClientTable;