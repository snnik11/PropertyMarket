using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args); //creates and configures web apps

// Add services to the container.

//types for endpoint api explorer added to dependency injection container
builder.Services.AddEndpointsApiExplorer();

//enables swagger to scan for all endpoints
builder.Services.AddSwaggerGen();
builder.Services.AddCors();


//new instance is created every time a request is received
//to avoid it notracking is added so that no DbContext is not recreated every time
builder.Services.AddDbContext<HouseDbContext>(o =>
 o.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking) );


//register houserepository in dep inj container
builder.Services.AddScoped<IHouseRepository, HouseRepository>();


var app = builder.Build();

//swagger middleware added for dev mode
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger(); //json format
    app.UseSwaggerUI(); //ui
}

app.UseHttpsRedirection();

app.UseCors(p => p.WithOrigins("http://localhost:3000").AllowAnyHeader().AllowAnyMethod());

var summaries = new[]
{
    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
};

//mapget() enables api endpoint to respond to get req so no need for controller here
//url, lamba 
// app.MapGet("/houses", (HouseDbContext dbContext) =>
// dbContext.Houses.Select(h => new HouseDto(h.Id,h.Address,h.Country, h.Price)));

app.MapGet("/houses", (IHouseRepository repo) => repo.GetAll()); //creates endpoint which GET request can call directly
app.MapGet("/house/{houseId:int}", async(int houseId, IHouseRepository repo) => 
{
    var house = await repo.Get(houseId);
    if (house  ==null)
    
        //Results is a factory type
        return Results.Problem($"House with ID {houseId} not found", statusCode : 404);
        return Results.Ok(house); //Ok for 200 status code
    
}).ProducesProblem(404).Produces<HouseDetailDto>(StatusCodes.Status200OK);
app.Run();

