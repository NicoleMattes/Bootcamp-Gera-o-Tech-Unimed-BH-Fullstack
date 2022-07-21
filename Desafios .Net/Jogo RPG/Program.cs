using System;
using Jogo_RPG.src.Entities;

namespace Jogo_RPG;

    class Program
    {

        static void Main(string[] args)
        {
            Hero Lula = new  Hero("Lulindo", 13, "Cindicalista do Povo");
            Boss Bolsonaro = new Boss("Capitão dos Gados", 17, "Miliciano Safado");

        
            System.Console.WriteLine($"Heroi: {Lula}");
            System.Console.WriteLine($"Vilão: { Bolsonaro}");

            System.Console.WriteLine(Lula.Attack(3));
            System.Console.WriteLine(Bolsonaro.Attack(1));
        }

    }

