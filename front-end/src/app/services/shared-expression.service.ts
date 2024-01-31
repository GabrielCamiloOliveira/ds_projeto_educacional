// shared-expression.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedExpressionService {
  private generatedExpression: string | null = null;

  setGeneratedExpression(expression: string): void {
    this.generatedExpression = expression;
  }

  getGeneratedExpression(): string | null {
    return this.generatedExpression;
  }
}
