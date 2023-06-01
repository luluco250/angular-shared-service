import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'platform' })
export class PropertyBagService {
	private readonly _map = new Map<string, unknown>();

	public get<T>(key: string): T | undefined {
		return this._map.get(key) as T | undefined;
	}

	public set(key: string, value: unknown): void {
		this._map.set(key, value);
	}

	public delete(key: string): boolean {
		return this._map.delete(key);
	}

	public clear(): void {
		this._map.clear();
	}

	public has(key: string): boolean {
		return this._map.has(key);
	}

	public entries(): IterableIterator<[string, unknown]> {
		return this._map.entries();
	}

	public keys(): IterableIterator<string> {
		return this._map.keys();
	}

	public values(): IterableIterator<unknown> {
		return this._map.values();
	}

	public forEach(
		callback: (
			value: unknown,
			key: unknown,
			propertyBagService: PropertyBagService,
		) => void,
		thisArg: unknown,
	): void {
		return this._map.forEach(
			(value, key) => callback(value, key, this),
			thisArg,
		);
	}

	public get size(): number {
		return this._map.size;
	}
}
