namespace Jogo_RPG.src.Entities
{
    public class Hero
    {
        public Hero(String Name, int Level, string Type)
        {
            this.Name = Name;
            this.Level = Level;
            this.Type = Type;
        }

        public string Name; 
        public int Level;
        public string Type; 

        public override string ToString()
        {
            return this.Name + " " + this.Level + " " + this.Type;
        }

        public virtual string Attack()
        {
            return this.Name + " Faz o L ";
        }

        public string Attack(int Bonus)
        {
            return this.Name + " Lançou ataque com bonus de pão com mortadela " + Bonus;
        }
    }
}