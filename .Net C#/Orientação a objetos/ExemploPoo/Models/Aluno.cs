namespace ExemploPoo.Models
{
    public class Aluno : Pessoa
    {
        public int Nota{ get; set; }

        public override void Apresentar()
        {
            Console.WriteLine($"Olá, meu nome é {Nome}, tenho {Idade}, meu documento é {Documento}");
        }
    }
}
