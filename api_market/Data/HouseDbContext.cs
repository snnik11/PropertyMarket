using System.Data.Common;
using Microsoft.EntityFrameworkCore;

public class HouseDbContext : DbContext
{
    //DbSet represents database itself
    public DbSet<HouseEntity> Houses => Set<HouseEntity>();

    public HouseDbContext(DbContextOptions<HouseDbContext> o): base(o){}

    protected override void OnConfiguring(DbContextOptionsBuilder options)
    {
       var folder = Environment.SpecialFolder.LocalApplicationData;
       var path = Environment.GetFolderPath(folder);
       options.UseSqlite($"Data Source={Path.Join(path,"houses1.db")}");
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        SeedData.Seed(builder);
    }
   
}