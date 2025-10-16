'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Tag, Plus, Search, Edit, Trash2, Package, Flower2, Grid, List, TrendingUp, TrendingDown } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Category {
  id: number;
  name: string;
  description: string;
  color: string;
  productCount: number;
  active: boolean;
  type: 'receita' | 'despesa';
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([
    { id: 1, name: 'Rosas', description: 'Rosas de todas as cores e variedades', color: '#ef4444', productCount: 15, active: true, type: 'receita' },
    { id: 2, name: 'Buquês', description: 'Arranjos e buquês para ocasiões especiais', color: '#8b5cf6', productCount: 8, active: true, type: 'receita' },
    { id: 3, name: 'Orquídeas', description: 'Orquídeas exóticas e elegantes', color: '#06b6d4', productCount: 12, active: true, type: 'receita' },
    { id: 4, name: 'Flores Silvestres', description: 'Flores naturais e campestres', color: '#eab308', productCount: 6, active: true, type: 'receita' },
    { id: 5, name: 'Arranjos', description: 'Arranjos decorativos e temáticos', color: '#10b981', productCount: 4, active: true, type: 'receita' },
    { id: 6, name: 'Compra de Vasos', description: 'Aquisição de vasos e recipientes', color: '#f97316', productCount: 0, active: true, type: 'despesa' },
    { id: 7, name: 'Fertilizantes', description: 'Adubos e fertilizantes para plantas', color: '#84cc16', productCount: 0, active: true, type: 'despesa' }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [typeFilter, setTypeFilter] = useState<'all' | 'receita' | 'despesa'>('all');
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    color: '#3b82f6',
    active: true,
    type: 'receita' as 'receita' | 'despesa'
  });

  const filteredCategories = categories.filter(category => {
    const matchesSearch = category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         category.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || category.type === typeFilter;
    return matchesSearch && matchesType;
  });

  const totalCategories = categories.length;
  const activeCategories = categories.filter(c => c.active).length;
  const totalProducts = categories.reduce((sum, category) => sum + category.productCount, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const categoryData = {
      ...formData,
      id: editingCategory ? editingCategory.id : Date.now(),
      productCount: editingCategory ? editingCategory.productCount : 0
    };

    if (editingCategory) {
      setCategories(categories.map(c => c.id === editingCategory.id ? categoryData as Category : c));
    } else {
      setCategories([...categories, categoryData as Category]);
    }

    resetForm();
  };

  const resetForm = () => {
    setFormData({ name: '', description: '', color: '#3b82f6', active: true, type: 'receita' });
    setEditingCategory(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (category: Category) => {
    setEditingCategory(category);
    setFormData({
      name: category.name,
      description: category.description,
      color: category.color,
      active: category.active,
      type: category.type
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    const category = categories.find(c => c.id === id);
    if (category && category.productCount > 0) {
      alert(`Não é possível excluir a categoria "${category.name}" pois ela possui ${category.productCount} produtos associados.`);
      return;
    }
    
    if (confirm('Tem certeza que deseja excluir esta categoria?')) {
      setCategories(categories.filter(c => c.id !== id));
    }
  };

  const colorOptions = [
    { value: '#ef4444', name: 'Vermelho' },
    { value: '#f97316', name: 'Laranja' },
    { value: '#eab308', name: 'Amarelo' },
    { value: '#10b981', name: 'Verde' },
    { value: '#06b6d4', name: 'Azul Claro' },
    { value: '#3b82f6', name: 'Azul' },
    { value: '#8b5cf6', name: 'Roxo' },
    { value: '#ec4899', name: 'Rosa' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-rose-50 to-pink-25 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 bg-gradient-to-r from-pink-500 to-purple-600 p-4 rounded-lg">
          <div>
            <h1 className="text-2xl font-bold text-white">Categorias</h1>
            <p className="text-white/80 mt-1 text-sm">Organize seus produtos por categorias</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-white text-pink-600 hover:bg-pink-50" onClick={() => resetForm()}>
              <Plus className="h-4 w-4 mr-2" />
              Nova Categoria
            </Button>
            </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{editingCategory ? 'Editar Categoria' : 'Nova Categoria'}</DialogTitle>
              <DialogDescription>
                {editingCategory ? 'Edite as informações da categoria.' : 'Adicione uma nova categoria de produtos.'}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">Nome</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="col-span-3"
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">Descrição</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="col-span-3"
                    rows={3}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="type" className="text-right">Tipo</Label>
                  <Select value={formData.type} onValueChange={(value: 'receita' | 'despesa') => setFormData({...formData, type: value})}>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="receita">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-green-600" />
                          Receita
                        </div>
                      </SelectItem>
                      <SelectItem value="despesa">
                        <div className="flex items-center gap-2">
                          <TrendingDown className="h-4 w-4 text-red-600" />
                          Despesa
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="color" className="text-right">Cor</Label>
                  <div className="col-span-3 flex gap-2 flex-wrap">
                    {colorOptions.map((color) => (
                      <button
                        key={color.value}
                        type="button"
                        onClick={() => setFormData({...formData, color: color.value})}
                        className={`w-8 h-8 rounded-full border-2 ${
                          formData.color === color.value ? 'border-gray-900' : 'border-gray-300'
                        }`}
                        style={{ backgroundColor: color.value }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancelar
                </Button>
                <Button type="submit">
                  {editingCategory ? 'Salvar' : 'Criar'}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="border-l-4 border-l-blue-400 bg-blue-50/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
            <CardTitle className="text-sm font-medium text-blue-700">Total de Categorias</CardTitle>
            <Tag className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent className="pt-1">
            <div className="text-2xl font-bold text-blue-800">{totalCategories}</div>
            <p className="text-xs text-blue-600">
              {activeCategories} ativas
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-l-purple-400 bg-purple-50/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
            <CardTitle className="text-sm font-medium text-purple-700">Produtos Categorizados</CardTitle>
            <Package className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent className="pt-1">
            <div className="text-2xl font-bold text-purple-800">{totalProducts}</div>
            <p className="text-xs text-purple-600">
              Total de produtos
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-l-green-400 bg-green-50/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
            <CardTitle className="text-sm font-medium text-green-700">Média por Categoria</CardTitle>
            <Flower2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent className="pt-1">
            <div className="text-2xl font-bold text-green-800">
              {totalCategories > 0 ? Math.round(totalProducts / totalCategories) : 0}
            </div>
            <p className="text-xs text-green-600">
              Produtos por categoria
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Buscar categorias..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        {/* Type Filter */}
        <Select value={typeFilter} onValueChange={(value: 'all' | 'receita' | 'despesa') => setTypeFilter(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filtrar por tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos os tipos</SelectItem>
            <SelectItem value="receita">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-green-600" />
                Receitas
              </div>
            </SelectItem>
            <SelectItem value="despesa">
              <div className="flex items-center gap-2">
                <TrendingDown className="h-4 w-4 text-red-600" />
                Despesas
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
        
        {/* View Toggle */}
        <div className="flex border rounded-lg">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setViewMode('grid')}
            className="rounded-r-none"
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setViewMode('list')}
            className="rounded-l-none"
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Categories Grid/List */}
      <div className={viewMode === 'grid' 
        ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
        : "space-y-4"
      }>
        {filteredCategories.map((category) => (
          <Card key={category.id} className={`hover:shadow-md transition-shadow ${
            viewMode === 'list' ? 'flex flex-row items-center' : ''
          }`}>
            {viewMode === 'grid' ? (
              // Grid View
              <>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: category.color }}
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-lg">{category.name}</CardTitle>
                          <Badge variant={category.type === 'receita' ? 'default' : 'destructive'} className="text-xs">
                            {category.type === 'receita' ? (
                              <><TrendingUp className="h-3 w-3 mr-1" />Receita</>
                            ) : (
                              <><TrendingDown className="h-3 w-3 mr-1" />Despesa</>
                            )}
                          </Badge>
                        </div>
                        <CardDescription className="mt-1">{category.description}</CardDescription>
                      </div>
                    </div>
                    <Badge variant={category.active ? 'default' : 'secondary'}>
                      {category.active ? 'Ativa' : 'Inativa'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-1">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Produtos:</span>
                      <span className="font-semibold">{category.productCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Cor:</span>
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full border"
                          style={{ backgroundColor: category.color }}
                        />
                        <span className="text-sm">{category.color}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm" onClick={() => handleEdit(category)} className="flex-1">
                      <Edit className="h-4 w-4 mr-1" />
                      Editar
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleDelete(category.id)} 
                      className="text-red-600 hover:text-red-700"
                      disabled={category.productCount > 0}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  {category.productCount > 0 && (
                    <p className="text-xs text-muted-foreground mt-2">
                      * Não é possível excluir categorias com produtos
                    </p>
                  )}
                </CardContent>
              </>
            ) : (
              // List View
              <>
                <div className="flex items-center gap-4 p-6 flex-1">
                  <div
                    className="w-6 h-6 rounded-full flex-shrink-0"
                    style={{ backgroundColor: category.color }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-semibold text-lg truncate">{category.name}</h3>
                      <Badge variant={category.type === 'receita' ? 'default' : 'destructive'} className="text-xs">
                        {category.type === 'receita' ? (
                          <><TrendingUp className="h-3 w-3 mr-1" />Receita</>
                        ) : (
                          <><TrendingDown className="h-3 w-3 mr-1" />Despesa</>
                        )}
                      </Badge>
                      <Badge variant={category.active ? 'default' : 'secondary'}>
                        {category.active ? 'Ativa' : 'Inativa'}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm truncate">{category.description}</p>
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="text-center">
                      <div className="font-semibold">{category.productCount}</div>
                      <div className="text-muted-foreground">Produtos</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className="w-4 h-4 rounded-full border"
                        style={{ backgroundColor: category.color }}
                      />
                      <span className="text-muted-foreground">{category.color}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button variant="outline" size="sm" onClick={() => handleEdit(category)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleDelete(category.id)} 
                      className="text-red-600 hover:text-red-700"
                      disabled={category.productCount > 0}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                {category.productCount > 0 && (
                  <div className="px-6 pb-2">
                    <p className="text-xs text-muted-foreground">
                      * Não é possível excluir categorias com produtos
                    </p>
                  </div>
                )}
              </>
            )}
          </Card>
        ))}
      </div>

      {filteredCategories.length === 0 && (
        <Card>
          <CardContent className="text-center py-8">
            <Tag className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhuma categoria encontrada</h3>
            <p className="text-gray-600">Tente ajustar a busca ou adicione novas categorias.</p>
          </CardContent>
        </Card>
      )}
      </div>
    </div>
  );
}