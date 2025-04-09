import React, { useEffect } from 'react';

export function getCrossOriginWorkerSource(workerUrl) {
    return `
          const originURL = new URL('${workerUrl}')
          const originalImportScripts = self.importScripts
          self.importScripts = (_url) => {
              const url = _url.replace('blob:', '').split('/').at(-1)
              originalImportScripts.call(self, new URL(url, originURL).toString())
          }
          importScripts(originURL.toString());
    `
}

export class CrossOriginWorker {

    constructor(url) {
        const workerSource = getCrossOriginWorkerSource(url.toString())
        const worker_url = URL.createObjectURL(
            new Blob([workerSource], { type: 'text/javascript' })
        )
        this._worker = new Worker(worker_url)
        URL.revokeObjectURL(worker_url)
    }

    get worker() {
        return this._worker
    }
}


export function WorkerComponent() {
    useEffect(() => {
        const worker = new CrossOriginWorker(
            new URL('./lib.js', import.meta.url)
        ).worker;

        worker.onmessage = (event) => {
            console.log('Message from worker:', event.data);
        };

        return () => {
            worker.terminate();
        };
    }, []);

    return (
        <div>
            Worker is running in background
        </div>
    );
}
