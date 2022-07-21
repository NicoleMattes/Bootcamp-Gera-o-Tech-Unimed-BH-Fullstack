using System;
using ExemploPoo.Models;

namespace ExemploPoo
{
    class Program 
    {
        static void Main(string[] args){

            ICalculadora calc = new Calculadora();
            System.Console.WriteLine(calc.Somar(10, 20));

            // Corrente c = new Corrente();
            // c.Creditar(100);

            // c.ExibirSaldo();

            // Calculadora calc = new Calculadora();
            // System.Console.WriteLine("Restado da primeira soma " + calc.Somar(10, 10));
            // System.Console.WriteLine("Restado da primeira soma " + calc.Somar(10, 10, 20));

            // Aluno p1 = new Aluno();
            // p1.Nome = "Bob";
            // p1.Idade = 20; 
            // p1.Documento = 122344;
            // p1.Nota = 10;

            // p1.Apresentar();
        
            // Valores validos 
        //     Retangulo r = new Retangulo();
        //     r.DefinirMedidas(30, 30);

        //     System.Console.WriteLine($"Área: {r.ObterArea()}");

             // Valores invalidos 
        //     Retangulo r2 = new Retangulo();
        //     r.DefinirMedidas(0, 0);

        //     System.Console.WriteLine($"Área: {r.ObterArea()}");
        // }

        // {
        //     Pessoa p1 = new Pessoa();

        //     p1.Nome = "Bob";
        //     p1.Idade = 20;

        //     p1.Apresentar();
        // }
        }
    
    }
}
