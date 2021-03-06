import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Options {
  headers?: HttpHeaders;
  params?: HttpParams;
}

export class RestService {
  constructor(protected http: HttpClient) {
  }

  protected createDefaultOptions(): Options {
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }

  protected optsName(name: string): Options {
    const newopts = this.createDefaultOptions();
    newopts.headers['xhr-name'] = name;
    return newopts;
  }

  protected optsNameCache(name: string): Options {
    const newopts = this.optsName(name);
    newopts.headers['xhr-plugin'] = 'pcache';
    return newopts;
  }

  protected createOptions(opts: Options): Options {
    const defaultOpts: Options = this.createDefaultOptions();
    if (opts) {
      opts = {
        params: opts.params || defaultOpts.params,
        headers: opts.headers || defaultOpts.headers
      };
      if (!opts.headers['Content-Type']) {
        opts.headers['Content-Type'] = defaultOpts.headers['Content-Type'];
      }
    }
    return opts || defaultOpts;
  }

  optsWithParams(params): Options {
    const newopts = this.createDefaultOptions();
    newopts.params = params;
    return newopts;
  }

  protected doGet<T>(serviceUrl: string, opts?: Options): Observable<T> {
    const ropts = this.createOptions(opts);
    return this.http.get(serviceUrl, ropts).pipe(
      map(response => response as T)
    );
  }

  protected doPost<T, R>(serviceUrl: string, body: T, opts?: Options): Observable<R> {
    const ropts = this.createOptions(opts);
    return this.http.post(serviceUrl, body, ropts).pipe(
      map(response => response as R)
    );
  }

  protected doGetParameters<T>(serviceUrl: string, parametros: HttpParams, opts?: Options): Observable<T> {
    const ropts = this.createOptions(opts);
    const options = parametros !== null ? {
      headers: ropts.headers,
      params: parametros
    } : ropts;
    return this.http.get(serviceUrl, options).pipe(
      map(response => response as T)
    );
  }
}
