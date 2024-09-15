function TabSelector() {
    return (
        <div id="tab">
            <button class="tablinks active" onclick="handleTabClick(event, 'articles')">Articles</button>
            <button class="tablinks" onclick="handleTabClick(event, 'sermons')">Sermons</button>
            <button class="tablinks" onclick="handleTabClick(event, 'podcasts')">Podcasts</button>
        </div>
    );
}

export default TabSelector;