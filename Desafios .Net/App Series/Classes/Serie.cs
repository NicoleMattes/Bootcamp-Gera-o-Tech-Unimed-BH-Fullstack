using System.Diagnostics;

namespace App_Series
{
    public class Serie : EntidadeBase
    {

        // Atributos 
        private Genero Genero { get; set; }
        private string Titulo { get; set; }
        private string Descricao { get; set; }
        private int Ano { get; set; }

        private bool Excluido { get; set; }

        // Metodos
        public Serie(int id, Genero genero, string titulo, string descricao, int ano)
        {
            this.Id = id;
            this.Genero = genero;
            this.Titulo = titulo;
            this.Descricao = descricao;
            this.Ano = Ano;
            this.Excluido = false;
        }

        internal void Add(Serie entidade)
        {
            throw new NotImplementedException();
        }

        public Serie()
        {
        }

        public override string ToString()
        {
            string retorno = "";
            retorno += "Gênero: " + this.Genero + Environment.NewLine;
            retorno += "Titulo: " + this.Titulo + Environment.NewLine;
            retorno += "Descricao: " + this.Descricao + Environment.NewLine;
            retorno += "Ano de Inicio: " + this.Ano;
            return retorno;

        }
        public string retornaTitulo()
        {
            return this.Titulo;
        }

        public int retornaId()
		{
			return this.Id;
		}

        public void Exclui() 
        {
            this.Excluido = true;
        }

        public bool retornaExcluido()
		{
			return this.Excluido;
		}

    }

}