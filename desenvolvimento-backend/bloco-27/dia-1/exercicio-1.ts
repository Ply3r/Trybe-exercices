type TvType = {
  size: number;
  resolution: string;
  connections: string[];
}

class Tv {
  private _size: number
  private _resolution: string
  private _connections: string[]
  private _connectTo: string

  constructor (params: TvType) {
    this._size = params.size;
    this._resolution = params.resolution;
    this._connections = params.connections;
    this._connectTo = '';
  }

  turnOn() {
    console.log('A tv está ligada');
  }

  set connectTo(entry) {
    if (this._connections.includes(entry)) {
      this._connectTo = entry
    }
  }

  get connectTo() {
    console.log(this);
    return this._connectTo;
  }
}

const Lg = new Tv({ size: 27.8, resolution: '1920x1080', connections: ['HDMI'] })

Lg.turnOn();
Lg.connectTo = 'HDMI'
Lg.connectTo

