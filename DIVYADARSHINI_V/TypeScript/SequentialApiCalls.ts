async function fetchSequentially(urls: string[]): Promise<any[]> {
    const results = [];
    for (const url of urls) {
        const response = await fetch(url);
        results.push(await response.json());
    }
    return results;
}