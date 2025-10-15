-- Dados de exemplo para desenvolvimento e testes
-- Execute este arquivo APÓS criar um usuário de teste

-- IMPORTANTE: Substitua 'your-user-id-here' pelo ID real do usuário de teste
-- Você pode obter o ID do usuário no painel do Supabase > Authentication > Users

-- Exemplo de transações para demonstração
-- Descomente e ajuste o user_id antes de executar

/*
-- Transações de exemplo (substitua o user_id)
INSERT INTO public.transactions (user_id, title, description, amount, type, date, category_id, payment_method_id) VALUES
  -- Receitas
  ('your-user-id-here', 'Salário Janeiro', 'Salário mensal', 5000.00, 'income', '2024-01-01', 
   (SELECT id FROM public.categories WHERE name = 'Salário' AND user_id = 'your-user-id-here'), 
   (SELECT id FROM public.payment_methods WHERE name = 'PIX' AND user_id = 'your-user-id-here')),
  
  ('your-user-id-here', 'Freelance Website', 'Desenvolvimento de site', 1500.00, 'income', '2024-01-15', 
   (SELECT id FROM public.categories WHERE name = 'Freelance' AND user_id = 'your-user-id-here'), 
   (SELECT id FROM public.payment_methods WHERE name = 'Transferência Bancária' AND user_id = 'your-user-id-here')),

  -- Despesas
  ('your-user-id-here', 'Supermercado', 'Compras mensais', -450.00, 'expense', '2024-01-02', 
   (SELECT id FROM public.categories WHERE name = 'Alimentação' AND user_id = 'your-user-id-here'), 
   (SELECT id FROM public.payment_methods WHERE name = 'Cartão de Débito' AND user_id = 'your-user-id-here')),
  
  ('your-user-id-here', 'Aluguel', 'Aluguel mensal', -1200.00, 'expense', '2024-01-05', 
   (SELECT id FROM public.categories WHERE name = 'Moradia' AND user_id = 'your-user-id-here'), 
   (SELECT id FROM public.payment_methods WHERE name = 'PIX' AND user_id = 'your-user-id-here')),
  
  ('your-user-id-here', 'Combustível', 'Gasolina', -150.00, 'expense', '2024-01-10', 
   (SELECT id FROM public.categories WHERE name = 'Transporte' AND user_id = 'your-user-id-here'), 
   (SELECT id FROM public.payment_methods WHERE name = 'Cartão de Crédito' AND user_id = 'your-user-id-here')),
  
  ('your-user-id-here', 'Cinema', 'Filme com a família', -80.00, 'expense', '2024-01-12', 
   (SELECT id FROM public.categories WHERE name = 'Lazer' AND user_id = 'your-user-id-here'), 
   (SELECT id FROM public.payment_methods WHERE name = 'Dinheiro' AND user_id = 'your-user-id-here'));

-- Meta financeira de exemplo
INSERT INTO public.financial_goals (user_id, title, description, target_amount, current_amount, target_date) VALUES
  ('your-user-id-here', 'Reserva de Emergência', 'Meta de 6 meses de gastos', 15000.00, 3000.00, '2024-12-31'),
  ('your-user-id-here', 'Viagem Europa', 'Férias em família', 8000.00, 1200.00, '2024-07-01');
*/

-- Instruções para uso:
-- 1. Crie um usuário no Supabase Auth
-- 2. Copie o ID do usuário (UUID)
-- 3. Substitua 'your-user-id-here' pelo ID real
-- 4. Descomente o código acima
-- 5. Execute este arquivo no SQL Editor do Supabase