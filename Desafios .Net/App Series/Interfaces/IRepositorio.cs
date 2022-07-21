using System.Collections.Generic;

namespace App_Series.Interfaces
{
    public interface IRepositorio<T>
    {
         List<T> Lista();
         T RetornaPorId(int id);
         void Insere(T emtidade);
         void Exclui(int id);
         void Atualiza(int ind, T entidade);
         int ProximoId();
    }
}