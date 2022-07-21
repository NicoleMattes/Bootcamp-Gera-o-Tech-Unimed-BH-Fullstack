using System;
using System.Collections.Generic;
using App_Series.Interfaces;

namespace App_Series
{
    public class SerieRepositorio : IRepositorio<Serie>
    {
        private List<Serie> ListaSeries = new List<Serie>();
        public void Atualiza(int id, Serie entidade)
        {
            // Entidade = Objeto
            ListaSeries[id] = entidade;
        }

        public void Exclui(int id)
        {
            ListaSeries[id].Exclui();
        }

        public void Insere(int id, Serie entidade)
        {
            ListaSeries[id].Add(entidade);
        }

        public void Insere(Serie entidade)
        {
            throw new NotImplementedException();
        }

        public List<Serie> Lista()
        {
            return ListaSeries;
        }

        public int ProximoId()
        {
            return ListaSeries.Count;
        }

        public Serie RetornaPorId(int id)
        {
            return ListaSeries[id];
        }
    }
}