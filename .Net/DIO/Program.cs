using System;

namespace Coleções {

    class Program 
    {
        static void Main(string[] args)
        {
            int[] arryInteiros = new int[3];

            arryInteiros[0] = 10;
            arryInteiros[1] = 20;
            arryInteiros[2] = 30;
            
            System.Console.WriteLine("Percorrendo o Arry por For");
            for (int i = 0; i <arryInteiros.Length; i++)
            {
                System.Console.WriteLine(arryInteiros[i]);
            }

            System.Console.WriteLine("Percorrendo o Arry por Foreach");
            foreach (int item in arryInteiros)
            {
                System.Console.WriteLine(item);
            }

            int[,] matriz = new int [4,2]
            {
                {8, 8},
                {10,20},
                {50,100},
                {90,200}
            };

            // o primeiro for é para a linha 
            for (int i =0; i < matriz.GetLength(0); i++)
            {
                // o segundo for é a para a coluna 
                for (int j = 0; j <matriz.GetLength(1); j++)
                {
                    System.Console.WriteLine(matriz[i, j]);
                }
            }

        }   
    }
}

