namespace Jogo_RPG.src.Entities
{
    public class Boss : Hero
    {
        public Boss(string Name, int Level, string Type) : base(Name, Level, Type)
        {

        }

        public override string Attack()
        {
            return this.Name + " É tudo culpa do PT ";
        }

        public string Attack(int Bonus)
        {
            return this.Name + " Lançou ataque com bonus da milicia de " + Bonus;
        }
    }
}