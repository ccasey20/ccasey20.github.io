function addForest()
{
    document.getElementById('forest').style.display = 'block';
}

function addMountains()
{
    document.getElementById('mountains').style.display = 'block';
}

function addRiver()
{
    document.getElementById('river').style.display = 'block';
}

function addLake()
{
    document.getElementById('lake').style.display = 'block';
}

function addCity()
{
    document.getElementById('city').style.display = 'block';
}

function makeDay()
{
    document.getElementById('sky').style.backgroundColor = 'rgb(84, 175, 205)';
    document.getElementById('night').style.display = 'none';
    document.getElementById('day').style.display = 'block';
}

function makeNight()
{
    document.getElementById('sky').style.backgroundColor = 'rgb(5, 26, 33)';
    document.getElementById('day').style.display = 'none';
    document.getElementById('night').style.display = 'block';
}

function makeRainy()
{
    document.getElementById('cloudy').style.display = 'none';
    document.getElementById('cloudy2').style.display = 'none';
    document.getElementById('rainy').style.display = 'block';
}

function makeClear()
{
    document.getElementById('rainy').style.display = 'none';
    document.getElementById('cloudy').style.display = 'none';
    document.getElementById('cloudy2').style.display = 'none';
}

function makeCloudy()
{
    document.getElementById('rainy').style.display = 'none';
    document.getElementById('cloudy').style.display = 'block';
    document.getElementById('cloudy2').style.display = 'block';
}

function clearAll()
{
    document.getElementById('sky').style.backgroundColor = 'rgb(105, 116, 120)';
    const imageElements = document.querySelectorAll('.overlay-image');
    imageElements.forEach(element => {element.style.display = 'none';});
}