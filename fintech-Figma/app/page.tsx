import { ArrowUpRight, Bell, CreditCard, Home, PieChart, Plus, Search, Settings, User, Wallet } from "lucide-react"

export default function FinanceFlowApp() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md mx-auto">
        {/* Tela 1: Dashboard Principal */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-white text-lg font-medium">Olá, Marina</h2>
                <p className="text-purple-100 text-sm">Bem-vindo(a) de volta!</p>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 bg-white/20 rounded-full">
                  <Bell className="h-5 w-5 text-white" />
                </button>
                <button className="p-2 bg-white/20 rounded-full">
                  <Settings className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex justify-between items-center mb-2">
                <p className="text-white text-sm">Saldo disponível</p>
                <button className="text-xs text-purple-100 flex items-center">
                  Ver detalhes <ArrowUpRight className="h-3 w-3 ml-1" />
                </button>
              </div>
              <h1 className="text-white text-2xl font-bold">R$ 4.250,75</h1>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-4 gap-4 mb-6">
              <button className="flex flex-col items-center justify-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                  <ArrowUpRight className="h-5 w-5 text-purple-600" />
                </div>
                <span className="text-xs text-gray-600">Enviar</span>
              </button>
              <button className="flex flex-col items-center justify-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                  <CreditCard className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-xs text-gray-600">Cartão</span>
              </button>
              <button className="flex flex-col items-center justify-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                  <PieChart className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-xs text-gray-600">Investir</span>
              </button>
              <button className="flex flex-col items-center justify-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                  <Plus className="h-5 w-5 text-gray-600" />
                </div>
                <span className="text-xs text-gray-600">Mais</span>
              </button>
            </div>

            <h3 className="font-medium text-gray-800 mb-3">Transações recentes</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <CreditCard className="h-4 w-4 text-red-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Netflix</p>
                    <p className="text-xs text-gray-500">Entretenimento</p>
                  </div>
                </div>
                <p className="text-sm font-medium text-red-500">-R$ 39,90</p>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <Wallet className="h-4 w-4 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Salário</p>
                    <p className="text-xs text-gray-500">Depósito</p>
                  </div>
                </div>
                <p className="text-sm font-medium text-green-500">+R$ 3.500,00</p>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <CreditCard className="h-4 w-4 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Supermercado</p>
                    <p className="text-xs text-gray-500">Alimentação</p>
                  </div>
                </div>
                <p className="text-sm font-medium text-red-500">-R$ 156,78</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 px-6 py-4 flex justify-between">
            <button className="flex flex-col items-center justify-center text-purple-600">
              <Home className="h-6 w-6" />
              <span className="text-xs mt-1">Início</span>
            </button>
            <button className="flex flex-col items-center justify-center text-gray-400">
              <PieChart className="h-6 w-6" />
              <span className="text-xs mt-1">Finanças</span>
            </button>
            <button className="flex flex-col items-center justify-center text-gray-400">
              <CreditCard className="h-6 w-6" />
              <span className="text-xs mt-1">Cartões</span>
            </button>
            <button className="flex flex-col items-center justify-center text-gray-400">
              <User className="h-6 w-6" />
              <span className="text-xs mt-1">Perfil</span>
            </button>
          </div>
        </div>

        {/* Tela 2: Serviços Contratados */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Serviços contratados</h2>
              <button className="p-2 bg-gray-100 rounded-full">
                <Search className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            <div className="border-b border-gray-100 pb-4">
              <div className="flex justify-between items-center py-3">
                <div className="text-sm font-medium text-gray-500 w-1/3">ITEM</div>
                <div className="text-sm font-medium text-gray-500 w-1/3 text-center">VALOR MÊS</div>
                <div className="text-sm font-medium text-gray-500 w-1/3 text-right">INFO</div>
              </div>
            </div>

            <div className="divide-y divide-gray-100">
              <div className="flex justify-between items-center py-4">
                <div className="text-sm font-medium text-gray-800 w-1/3">Seguro Cartão</div>
                <div className="text-sm font-medium text-gray-800 w-1/3 text-center">R$ 10,00</div>
                <div className="w-1/3 text-right">
                  <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-medium">i</span>
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center py-4">
                <div className="text-sm font-medium text-gray-800 w-1/3">LIS Conta</div>
                <div className="text-sm font-medium text-gray-800 w-1/3 text-center">R$ 3,50</div>
                <div className="w-1/3 text-right">
                  <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-medium">i</span>
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center py-4">
                <div className="text-sm font-medium text-gray-800 w-1/3">Cesta Produtos</div>
                <div className="text-sm font-medium text-gray-800 w-1/3 text-center">R$ 5,00</div>
                <div className="w-1/3 text-right">
                  <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-medium">i</span>
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center py-4">
                <div className="text-sm font-medium text-gray-800 w-1/3">Investimento Auto</div>
                <div className="text-sm font-medium text-gray-800 w-1/3 text-center">R$ 0,00</div>
                <div className="w-1/3 text-right">
                  <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-medium">i</span>
                  </button>
                </div>
              </div>
            </div>

            <button className="w-full mt-6 py-3 bg-gray-200 rounded-lg text-gray-800 font-medium">
              Adicionar Serviço
            </button>
          </div>

          <div className="border-t border-gray-100 px-6 py-4 flex justify-between">
            <button className="flex flex-col items-center justify-center text-gray-400">
              <Home className="h-6 w-6" />
              <span className="text-xs mt-1">Início</span>
            </button>
            <button className="flex flex-col items-center justify-center text-purple-600">
              <PieChart className="h-6 w-6" />
              <span className="text-xs mt-1">Finanças</span>
            </button>
            <button className="flex flex-col items-center justify-center text-gray-400">
              <CreditCard className="h-6 w-6" />
              <span className="text-xs mt-1">Cartões</span>
            </button>
            <button className="flex flex-col items-center justify-center text-gray-400">
              <User className="h-6 w-6" />
              <span className="text-xs mt-1">Perfil</span>
            </button>
          </div>
        </div>

        {/* Tela 3: Análise Financeira */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Análise Financeira</h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-xs bg-purple-600 text-white rounded-full">Mês</button>
                <button className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">Ano</button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm text-gray-500">Gastos do mês</p>
                  <h3 className="text-xl font-bold text-gray-800">R$ 2.345,67</h3>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Economia</p>
                  <h3 className="text-xl font-bold text-green-500">+12%</h3>
                </div>
              </div>

              <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 w-3/4"></div>
              </div>
              <p className="text-xs text-gray-500 mt-2">75% do seu limite mensal</p>
            </div>

            <h3 className="font-medium text-gray-800 mb-3">Categorias de gastos</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                  <p className="text-sm text-gray-700">Alimentação</p>
                </div>
                <div className="flex items-center">
                  <p className="text-sm font-medium text-gray-800">R$ 850,32</p>
                  <p className="text-xs text-gray-500 ml-2">36%</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <p className="text-sm text-gray-700">Moradia</p>
                </div>
                <div className="flex items-center">
                  <p className="text-sm font-medium text-gray-800">R$ 650,00</p>
                  <p className="text-xs text-gray-500 ml-2">28%</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <p className="text-sm text-gray-700">Transporte</p>
                </div>
                <div className="flex items-center">
                  <p className="text-sm font-medium text-gray-800">R$ 420,15</p>
                  <p className="text-xs text-gray-500 ml-2">18%</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <p className="text-sm text-gray-700">Entretenimento</p>
                </div>
                <div className="flex items-center">
                  <p className="text-sm font-medium text-gray-800">R$ 245,20</p>
                  <p className="text-xs text-gray-500 ml-2">10%</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <p className="text-sm text-gray-700">Outros</p>
                </div>
                <div className="flex items-center">
                  <p className="text-sm font-medium text-gray-800">R$ 180,00</p>
                  <p className="text-xs text-gray-500 ml-2">8%</p>
                </div>
              </div>
            </div>

            <button className="w-full mt-6 py-3 bg-purple-600 text-white rounded-lg font-medium">
              Ver relatório completo
            </button>
          </div>

          <div className="border-t border-gray-100 px-6 py-4 flex justify-between">
            <button className="flex flex-col items-center justify-center text-gray-400">
              <Home className="h-6 w-6" />
              <span className="text-xs mt-1">Início</span>
            </button>
            <button className="flex flex-col items-center justify-center text-purple-600">
              <PieChart className="h-6 w-6" />
              <span className="text-xs mt-1">Finanças</span>
            </button>
            <button className="flex flex-col items-center justify-center text-gray-400">
              <CreditCard className="h-6 w-6" />
              <span className="text-xs mt-1">Cartões</span>
            </button>
            <button className="flex flex-col items-center justify-center text-gray-400">
              <User className="h-6 w-6" />
              <span className="text-xs mt-1">Perfil</span>
            </button>
          </div>
        </div>

        {/* Tela 4: Cartões */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Meus Cartões</h2>
              <button className="p-2 bg-purple-100 rounded-full">
                <Plus className="h-5 w-5 text-purple-600" />
              </button>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl transform rotate-1 scale-105 opacity-30"></div>
              <div className="relative bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl p-5">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <p className="text-purple-100 text-xs mb-1">Saldo disponível</p>
                    <h3 className="text-white text-xl font-bold">R$ 7.850,00</h3>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center bg-white/20 rounded-full">
                    <CreditCard className="h-4 w-4 text-white" />
                  </div>
                </div>

                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-purple-100 text-xs mb-1">Número do cartão</p>
                    <p className="text-white font-medium">•••• •••• •••• 4587</p>
                  </div>
                  <div>
                    <p className="text-white font-medium">09/26</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between mb-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <CreditCard className="h-5 w-5 text-purple-600" />
                </div>
                <span className="text-xs text-gray-600">Fatura</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <ArrowUpRight className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-xs text-gray-600">Pagar</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Settings className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-xs text-gray-600">Ajustes</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Bell className="h-5 w-5 text-yellow-600" />
                </div>
                <span className="text-xs text-gray-600">Alertas</span>
              </div>
            </div>

            <h3 className="font-medium text-gray-800 mb-3">Transações recentes</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <CreditCard className="h-4 w-4 text-red-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Restaurante</p>
                    <p className="text-xs text-gray-500">Ontem às 20:45</p>
                  </div>
                </div>
                <p className="text-sm font-medium text-red-500">-R$ 89,90</p>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <CreditCard className="h-4 w-4 text-red-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Farmácia</p>
                    <p className="text-xs text-gray-500">Ontem às 15:30</p>
                  </div>
                </div>
                <p className="text-sm font-medium text-red-500">-R$ 45,67</p>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <CreditCard className="h-4 w-4 text-red-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Streaming</p>
                    <p className="text-xs text-gray-500">22/05 às 10:15</p>
                  </div>
                </div>
                <p className="text-sm font-medium text-red-500">-R$ 29,90</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 px-6 py-4 flex justify-between">
            <button className="flex flex-col items-center justify-center text-gray-400">
              <Home className="h-6 w-6" />
              <span className="text-xs mt-1">Início</span>
            </button>
            <button className="flex flex-col items-center justify-center text-gray-400">
              <PieChart className="h-6 w-6" />
              <span className="text-xs mt-1">Finanças</span>
            </button>
            <button className="flex flex-col items-center justify-center text-purple-600">
              <CreditCard className="h-6 w-6" />
              <span className="text-xs mt-1">Cartões</span>
            </button>
            <button className="flex flex-col items-center justify-center text-gray-400">
              <User className="h-6 w-6" />
              <span className="text-xs mt-1">Perfil</span>
            </button>
          </div>
        </div>

        {/* Tela 5: Investimentos */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Investimentos</h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-xs bg-purple-600 text-white rounded-full">Todos</button>
                <button className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">Renda Fixa</button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm text-gray-500">Total investido</p>
                  <h3 className="text-xl font-bold text-gray-800">R$ 15.750,32</h3>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Rentabilidade</p>
                  <h3 className="text-xl font-bold text-green-500">+8,5%</h3>
                </div>
              </div>

              <div className="h-20 flex items-end space-x-1">
                <div className="h-1/3 w-full bg-purple-200 rounded-t-sm"></div>
                <div className="h-1/2 w-full bg-purple-300 rounded-t-sm"></div>
                <div className="h-2/3 w-full bg-purple-400 rounded-t-sm"></div>
                <div className="h-1/2 w-full bg-purple-500 rounded-t-sm"></div>
                <div className="h-3/4 w-full bg-purple-600 rounded-t-sm"></div>
                <div className="h-full w-full bg-purple-700 rounded-t-sm"></div>
                <div className="h-4/5 w-full bg-purple-600 rounded-t-sm"></div>
                <div className="h-3/5 w-full bg-purple-500 rounded-t-sm"></div>
                <div className="h-2/3 w-full bg-purple-400 rounded-t-sm"></div>
                <div className="h-3/4 w-full bg-purple-500 rounded-t-sm"></div>
                <div className="h-4/5 w-full bg-purple-600 rounded-t-sm"></div>
                <div className="h-full w-full bg-purple-700 rounded-t-sm"></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>Jan</span>
                <span>Fev</span>
                <span>Mar</span>
                <span>Abr</span>
                <span>Mai</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Ago</span>
                <span>Set</span>
                <span>Out</span>
                <span>Nov</span>
                <span>Dez</span>
              </div>
            </div>

            <h3 className="font-medium text-gray-800 mb-3">Meus investimentos</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <PieChart className="h-4 w-4 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">CDB Banco FinanceFlow</p>
                    <p className="text-xs text-gray-500">Renda Fixa | 110% CDI</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-800">R$ 5.000,00</p>
                  <p className="text-xs text-green-500">+7,2% a.a.</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <PieChart className="h-4 w-4 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Tesouro Selic 2026</p>
                    <p className="text-xs text-gray-500">Tesouro Direto</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-800">R$ 3.500,00</p>
                  <p className="text-xs text-green-500">+5,8% a.a.</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <PieChart className="h-4 w-4 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Fundo Multimercado</p>
                    <p className="text-xs text-gray-500">Renda Variável</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-800">R$ 7.250,32</p>
                  <p className="text-xs text-green-500">+12,5% a.a.</p>
                </div>
              </div>
            </div>

            <button className="w-full mt-6 py-3 bg-purple-600 text-white rounded-lg font-medium">Investir agora</button>
          </div>

          <div className="border-t border-gray-100 px-6 py-4 flex justify-between">
            <button className="flex flex-col items-center justify-center text-gray-400">
              <Home className="h-6 w-6" />
              <span className="text-xs mt-1">Início</span>
            </button>
            <button className="flex flex-col items-center justify-center text-purple-600">
              <PieChart className="h-6 w-6" />
              <span className="text-xs mt-1">Finanças</span>
            </button>
            <button className="flex flex-col items-center justify-center text-gray-400">
              <CreditCard className="h-6 w-6" />
              <span className="text-xs mt-1">Cartões</span>
            </button>
            <button className="flex flex-col items-center justify-center text-gray-400">
              <User className="h-6 w-6" />
              <span className="text-xs mt-1">Perfil</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
