using System;
using ExemploPoo.Models;

namespace ExemploPoo
{
    class Program 
    {
        static void Main(string[] args)
        {
            // Valores validos 
            Retangulo r = new Retangulo();
            r.DefinirMedidas(30, 30);

            System.Console.WriteLine($"Área: {r.ObterArea()}");
        }

        // {
        //     Pessoa p1 = new Pessoa();

        //     p1.Nome = "Bob";
        //     p1.Idade = 20;

        //     p1.Apresentar();
        // }
    }
}
