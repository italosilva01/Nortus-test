import type { Request, Response } from 'express';
import { Router } from 'express';
import { authenticateToken } from '../middlewares/authenticationJwt';

const router = Router();

router.get('/', authenticateToken, (_req: Request, res: Response) => {
  const mockTickets = [
    {
      id: '1',
      title: 'Ticket de exemplo 1',
      status: 'open',
      priority: 'high',
      createdAt: new Date().toISOString(),
    },
    {
      id: '2',
      title: 'Ticket de exemplo 2',
      status: 'in_progress',
      priority: 'medium',
      createdAt: new Date().toISOString(),
    },
  ];

  res.json({
    success: true,
    data: mockTickets,
    total: mockTickets.length,
  });
});

// GET /api/tickets/:id - Buscar ticket por ID
router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;

  // TODO: Buscar ticket específico do banco de dados
  const mockTicket = {
    id,
    title: `Ticket ${id}`,
    description: 'Descrição do ticket',
    status: 'open',
    priority: 'high',
    createdAt: new Date().toISOString(),
  };

  res.json({
    success: true,
    data: mockTicket,
  });
});

// POST /api/tickets - Criar novo ticket
router.post('/', (req: Request, res: Response) => {
  const ticketData = req.body;

  // TODO: Validar dados com Zod
  // TODO: Salvar no banco de dados

  const newTicket = {
    id: Math.random().toString(36).substr(2, 9),
    ...ticketData,
    createdAt: new Date().toISOString(),
  };

  res.status(201).json({
    success: true,
    data: newTicket,
    message: 'Ticket criado com sucesso',
  });
});

// PUT /api/tickets/:id - Atualizar ticket
router.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const updateData = req.body;

  // TODO: Validar dados
  // TODO: Atualizar no banco de dados

  res.json({
    success: true,
    data: { id, ...updateData },
    message: 'Ticket atualizado com sucesso',
  });
});

// DELETE /api/tickets/:id - Deletar ticket
router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;

  // TODO: Deletar do banco de dados

  res.json({
    success: true,
    message: `Ticket ${id} deletado com sucesso`,
  });
});

export default router;
